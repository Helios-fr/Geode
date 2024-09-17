package main

import (
	"fmt"
	"log"
	"net/http"

	"backend/utils"
)

func hello(w http.ResponseWriter, r *http.Request) {
	log.Printf("/api/hello : Request received from %s\n", r.RemoteAddr)
	fmt.Fprint(w, utils.Hello())
}

func main() {
	addr := "localhost:9001"

	http.HandleFunc("/api/hello", hello)
	log.Printf("Starting server on %s\n", addr)
	if err := http.ListenAndServe(addr, nil); err != nil {
		log.Fatalf("Server failed to start: %v", err)
	}
}
