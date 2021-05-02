package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type Form struct {
	ID       primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	FullName string             `json:"fullName"`
	Email    string             `json:"email"`
	Message  string             `json:"message"`
}
