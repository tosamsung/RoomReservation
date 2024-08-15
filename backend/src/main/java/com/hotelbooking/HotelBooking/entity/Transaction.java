package com.hotelbooking.HotelBooking.entity;

import java.util.Date;

import com.hotelbooking.HotelBooking.enums.PaymentMethod;
import com.hotelbooking.HotelBooking.enums.TransactionStatus;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Transactions")
public class Transaction {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    @ManyToOne
	    @JoinColumn(name = "payment_id", referencedColumnName = "id", nullable = false)
	    private Payment payment;

	    private String transactionId;

	    private Date transactionDate;

	    @Enumerated(EnumType.STRING)
	    private TransactionStatus status;

	    private String paymentGateway;
}
