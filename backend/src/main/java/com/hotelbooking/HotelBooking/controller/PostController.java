package com.hotelbooking.HotelBooking.controller;

import com.hotelbooking.HotelBooking.dto.PostDTO;
import com.hotelbooking.HotelBooking.exceptions.DataNotFoundException;
import com.hotelbooking.HotelBooking.responses.PageResponse;
import com.hotelbooking.HotelBooking.responses.PostResponse;
import com.hotelbooking.HotelBooking.responses.UserResponse;
import com.hotelbooking.HotelBooking.service.serviceinterface.PostService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/posts")
@RequiredArgsConstructor
public class PostController {
    private final PostService postService;

    @GetMapping
    public ResponseEntity<?> getAllPosts(@RequestParam(required = false,defaultValue = "10") int size,
                                         @RequestParam(required = false,defaultValue = "0") int page) {
        if(page >0) page = page-1;
        PageRequest pageRequest = PageRequest.of(page, size);
        Page<PostResponse> posts = postService.find(pageRequest);
        return ResponseEntity.ok(PageResponse.<PostResponse>builder()
                .content(posts.getContent())
                .totalPages(posts.getTotalPages())
                .totalElements(posts.getTotalElements()).build());
    }

    @GetMapping("/{id}")
    public ResponseEntity<PostResponse> getPostById(@PathVariable Long id) throws DataNotFoundException {
        PostResponse postResponse = postService.findById(id);
        return new ResponseEntity<>(postResponse, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<PostResponse> createPost(@RequestBody @Valid PostDTO postDTO) throws DataNotFoundException {
        PostResponse postResponse = postService.create(postDTO);
        return new ResponseEntity<>(postResponse, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PostResponse> updatePost(@RequestBody @Valid PostDTO postDTO, @PathVariable Long id) throws DataNotFoundException {
        PostResponse postResponse = postService.update(postDTO, id);
        return new ResponseEntity<>(postResponse, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePost(@PathVariable Long id) throws DataNotFoundException {
        postService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
