package com.hotelbooking.HotelBooking.controller;

import com.hotelbooking.HotelBooking.dto.UserDTO;
import com.hotelbooking.HotelBooking.responses.UserListResponse;
import com.hotelbooking.HotelBooking.responses.UserResponse;
import com.hotelbooking.HotelBooking.service.serviceinterface.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping
    public ResponseEntity<?> getAllUsers(@RequestParam(required = false,defaultValue = "10") int size,
                                         @RequestParam(required = false,defaultValue = "0") int page) {
        Pageable pageable = PageRequest.of(page, size);
        Page<UserResponse> userPage = userService.find(pageable);
        return ResponseEntity.ok(UserListResponse.builder()
                .users(userPage.getContent())
                .totalPages(userPage.getTotalPages())
                .build());
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserResponse> getUserById(@PathVariable Long id) {
        return ResponseEntity.ok(userService.findById(id));
    }

    @PostMapping
    public ResponseEntity<UserResponse> createUser(@RequestBody @Valid UserDTO userDTO) {
        return ResponseEntity.ok(userService.create(userDTO));
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserResponse> updateUser(@RequestBody @Valid UserDTO userDTO, @PathVariable Long id) {
        return ResponseEntity.ok(userService.update(userDTO, id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
