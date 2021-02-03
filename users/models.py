from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    is_manager = models.BooleanField()
    is_employee = models.BooleanField()

    def __str__(self):
        return self.username


class Manager(models.Model):
    
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    firstName = models.CharField(max_length=100)
    lastName = models.CharField(max_length=100)
    email = models.EmailField(max_length=200, unique=True)
    password = models.CharField(max_length=100)
    date_of_birth = models.DateField()
    address = models.CharField(max_length=200)
    company = models.CharField(max_length=100)



    def __str__(self):
        return self.user.username
