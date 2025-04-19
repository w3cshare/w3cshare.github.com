package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
)

type HealthResponse struct {
	Status string `json:"status"`
}

type ServiceResponse struct {
	Service string `json:"service"`
	Status  string `json:"status"`
}

func main() {
	// 获取环境变量
	consulHost := getEnv("CONSUL_HOST", "localhost")
	zipkinHost := getEnv("ZIPKIN_HOST", "localhost")

	// 路由设置
	http.HandleFunc("/", indexHandler)
	http.HandleFunc("/health", healthHandler)
	http.HandleFunc("/consul", func(w http.ResponseWriter, r *http.Request) {
		consulHandler(w, r, consulHost)
	})
	http.HandleFunc("/zipkin", func(w http.ResponseWriter, r *http.Request) {
		zipkinHandler(w, r, zipkinHost)
	})

	// 启动服务器
	port := 8000
	log.Printf("Go微服务启动在端口 %d...", port)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%d", port), nil))
}

func indexHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(ServiceResponse{
		Service: "go-microservice",
		Status:  "running",
	})
}

func healthHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(HealthResponse{
		Status: "UP",
	})
}

func consulHandler(w http.ResponseWriter, r *http.Request, consulHost string) {
	w.Header().Set("Content-Type", "application/json")
	resp, err := http.Get(fmt.Sprintf("http://%s:8500/v1/status/leader", consulHost))
	if err != nil {
		json.NewEncoder(w).Encode(map[string]string{
			"consul_status": "error",
			"error":        err.Error(),
		})
		return
	}
	defer resp.Body.Close()

	status := "connected"
	if resp.StatusCode != 200 {
		status = "disconnected"
	}

	json.NewEncoder(w).Encode(map[string]string{
		"consul_status": status,
	})
}

func zipkinHandler(w http.ResponseWriter, r *http.Request, zipkinHost string) {
	w.Header().Set("Content-Type", "application/json")
	resp, err := http.Get(fmt.Sprintf("http://%s:9411/health", zipkinHost))
	if err != nil {
		json.NewEncoder(w).Encode(map[string]string{
			"zipkin_status": "error",
			"error":         err.Error(),
		})
		return
	}
	defer resp.Body.Close()

	status := "connected"
	if resp.StatusCode != 200 {
		status = "disconnected"
	}

	json.NewEncoder(w).Encode(map[string]string{
		"zipkin_status": status,
	})
}

func getEnv(key, fallback string) string {
	value, exists := os.LookupEnv(key)
	if !exists {
		return fallback
	}
	return value
}
