package com.hotelbooking.HotelBooking.service.userservice;

import com.hotelbooking.HotelBooking.dto.PostDTO;
import com.hotelbooking.HotelBooking.dto.UserUpdateDTO;
import com.hotelbooking.HotelBooking.entity.property.Post;
import com.hotelbooking.HotelBooking.entity.property.Property;
import com.hotelbooking.HotelBooking.enums.PostStatus;
import com.hotelbooking.HotelBooking.exceptions.DataNotFoundException;
import com.hotelbooking.HotelBooking.repository.PostRepository;
import com.hotelbooking.HotelBooking.repository.PropertyRepository;
import com.hotelbooking.HotelBooking.responses.PostResponse;
import com.hotelbooking.HotelBooking.service.serviceinterface.PostService;
import com.hotelbooking.HotelBooking.service.serviceinterface.UserService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PostServiceImpl implements PostService {
    private final PostRepository postRepository;
    private final PropertyRepository propertyRepository;
    private final ModelMapper modelMapper;
    @Override
    public Page<PostResponse> find(Pageable pageable) {
        return postRepository.findAll(pageable).map(post -> modelMapper.map(post, PostResponse.class));
    }

    @Override
    public PostResponse create(PostDTO postDTO) throws DataNotFoundException {
        Property property = getPropertyById(postDTO.getPropertyId());
        Post post = modelMapper.map(postDTO, Post.class);
        post.setProperty(property);
        return modelMapper.map(postRepository.save(post), PostResponse.class);
    }

    @Override
    public PostResponse update(PostDTO postDTO, Long id) throws DataNotFoundException {
        Property property = getPropertyById(postDTO.getPropertyId());
        Post post = getPostById(id);
        post.setPostStatus(postDTO.getPostStatus());
        post.setProperty(property);
        post.setAbout(postDTO.getAbout());
        post.setAccess(postDTO.getAccess());
        post.setSpace(postDTO.getSpace());
        return modelMapper.map(postRepository.save(post), PostResponse.class);
    }

    @Override
    public void delete(Long id) throws DataNotFoundException {
        Post post = getPostById(id);
        post.setPostStatus(PostStatus.DELETED);
        postRepository.save(post);
    }

    @Override
    public PostResponse findById(Long id) throws DataNotFoundException {
        return modelMapper.map(getPostById(id),PostResponse.class);
    }
    private Property getPropertyById(Long propertyId) throws DataNotFoundException {
        return propertyRepository.findById(propertyId).orElseThrow(() -> new DataNotFoundException("Could not found property with id: " + propertyId));
    }
    private Post getPostById(Long postId) throws DataNotFoundException {
        return postRepository.findById(postId).orElseThrow(() -> new DataNotFoundException("Could not found post with id: " + postId));
    }
}
