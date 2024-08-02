package com.hotelbooking.HotelBooking.service.userservice;

import com.hotelbooking.HotelBooking.exceptions.ExistingException;
import com.hotelbooking.HotelBooking.responses.UserResponse;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.hotelbooking.HotelBooking.dto.UserDTO;
import com.hotelbooking.HotelBooking.entity.User;
import com.hotelbooking.HotelBooking.repository.UserRepository;
import com.hotelbooking.HotelBooking.service.serviceinterface.UserService;

import org.springframework.data.domain.Pageable;


@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{

	private final UserRepository userRepository;
	private final ModelMapper modelMapper;
	public User findByUserName(String userName) {
		User user = userRepository.findByUsername(userName)
				.orElseThrow(() -> new UsernameNotFoundException("User not found with username: " + userName));
		return user;
	}

	@Override
	public Page<UserResponse> find(Pageable pageable) {
		return userRepository.findAll(pageable).map(u -> modelMapper.map(u, UserResponse.class));
	}

	@Override
	public UserResponse create(UserDTO userDTO) {
		if(userRepository.existsByUsername(userDTO.getUsername()) && userRepository.existsByEmail(userDTO.getEmail())) {
			throw new ExistingException("Username or email already exists");
		}
		return modelMapper.map(userRepository.save(modelMapper.map(userDTO, User.class)), UserResponse.class);
	}

	@Override
	public UserResponse update(UserDTO userDTO,Long	id) {
		User user = userRepository.findById(id).orElseThrow(() -> new UsernameNotFoundException("User not found with id: " + id));
		userDTO.setId(user.getId());
		modelMapper.map(userDTO, user);
		return modelMapper.map(userRepository.save(user), UserResponse.class);
	}

	@Override
	public void delete(Long id) {
		userRepository.findById(id).orElseThrow(() -> new UsernameNotFoundException("User not found with id: " + id));
		userRepository.findById(id);
	}

	@Override
	public UserResponse findById(Long id) {
		User user = userRepository.findById(id).orElseThrow(() -> new UsernameNotFoundException("User not found with id: " + id));
		return modelMapper.map(user, UserResponse.class);
	}
}
