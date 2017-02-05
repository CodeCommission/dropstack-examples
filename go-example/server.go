package main

import(
  "os"
  "fmt"
  "net/http"
)

func indexHandler( w http.ResponseWriter, r *http.Request) {
  fmt.Fprintf(w, "(GET/TEXT) DROPSTACK Deploy with Go")
}

func main(){
  var binding = ":8080"
  if(len(os.Getenv("SERVICE_PORT")) > 0) {
    binding = fmt.Sprintf(":%s", os.Getenv("SERVICE_PORT"))
  }
  fmt.Printf("Listen on %s\nPress CTRL+C to stop", binding)

  http.HandleFunc("/", indexHandler)
  http.ListenAndServe(binding, nil)
}
