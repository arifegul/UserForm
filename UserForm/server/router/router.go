package router

import (
	"server/main"

	"github.com/gorilla/mux"
)

func Router() *mux.Router {

	router := mux.NewRouter()

	router.HandleFunc("/api/user", main.GetAllForm).Methods("GET", "OPTIONS")
	router.HandleFunc("/api/user", main.CreateForm).Methods("POST", "OPTIONS")
	router.HandleFunc("/api/user/{id}", main.FormComplete).Methods("PUT", "OPTIONS")
	return router
}
