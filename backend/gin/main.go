package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func main() {
	gin.SetMode(gin.ReleaseMode)

	r := gin.Default()

	r.StaticFile("/", "./public/index.html")
	r.StaticFile("/index.html", "./public/index.html")

	r.GET("/admin", func(c *gin.Context) {
		c.String(http.StatusOK, "Hello from Gin Web Framework admin endpoint")
	})

	_ = r.Run(":8080")
}
