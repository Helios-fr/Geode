package main

import (
	"crypto/rand"
	"encoding/hex"
	"fmt"
	"io"
	"net/http"
	"os"
	"path/filepath"
	"strings"
	"sync"
)

var (
	fileStore = make(map[string]string)
	mutex     = &sync.Mutex{}
)

func main() {
	// Ensure the uploads directory exists
	if err := os.MkdirAll("uploads", os.ModePerm); err != nil {
		fmt.Println("Error creating uploads directory:", err)
		return
	}

	http.HandleFunc("/upload", uploadHandler)
	http.HandleFunc("/download/", downloadHandler)

	fmt.Println("Server started at :9002")
	http.ListenAndServe(":9002", nil)
}

func generateRandomID() (string, error) {
	bytes := make([]byte, 16) // 16 bytes = 32 hex characters
	if _, err := rand.Read(bytes); err != nil {
		return "", err
	}
	return hex.EncodeToString(bytes), nil
}

func uploadHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
		return
	}

	file, header, err := r.FormFile("file")
	if err != nil {
		fmt.Println("Error getting file from request:", err)
		http.Error(w, "Failed to get file from request", http.StatusBadRequest)
		return
	}
	defer file.Close()

	fileID, err := generateRandomID()
	if err != nil {
		http.Error(w, "Failed to generate file ID", http.StatusInternalServerError)
		return
	}

	filePath := filepath.Join("uploads", fileID)
	out, err := os.Create(filePath)
	if err != nil {
		fmt.Println("Error creating file:", err)
		http.Error(w, "Failed to save file", http.StatusInternalServerError)
		return
	}
	defer out.Close()

	_, err = io.Copy(out, file)
	if err != nil {
		fmt.Println("Error copying file:", err)
		http.Error(w, "Failed to save file", http.StatusInternalServerError)
		return
	}

	// Check if the file is a .zip file
	if !strings.HasSuffix(header.Filename, ".zip") {
		os.Remove(filePath)
		http.Error(w, "Only .zip files are allowed", http.StatusBadRequest)
		return
	}

	mutex.Lock()
	fileStore[fileID] = filePath
	mutex.Unlock()

	w.Write([]byte(fmt.Sprintf("File uploaded successfully with ID: %s", fileID)))
}

func downloadHandler(w http.ResponseWriter, r *http.Request) {
	fileID := filepath.Base(r.URL.Path)

	mutex.Lock()
	filePath, exists := fileStore[fileID]
	mutex.Unlock()

	if !exists {
		http.Error(w, "File not found", http.StatusNotFound)
		return
	}

	http.ServeFile(w, r, filePath)
}
