package no.martinvks;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdminController {

    @GetMapping("/admin")
    public String adminEndpoint() {
        return "Hello from spring boot admin endpoint";
    }
}
