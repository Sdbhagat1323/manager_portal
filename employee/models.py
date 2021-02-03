from django.db import models

# Create your models here.
class Employee(models.Model):
    
    firstName = models.CharField(max_length=100)
    lastName = models.CharField(max_length=100)
    email = models.EmailField(max_length=200, unique=True)
    mobile = models.IntegerField()
    password = models.CharField(max_length=100)
    date_of_birth = models.DateField()
    address = models.CharField(max_length=200)
    city = models.CharField(max_length=100)
    company = models.CharField(max_length=100)

    def __str__(self):
        return self.user.first_name
# Create your models here.
# const { firstName, lastName, email, mobile, date_of_birth,address, city, company };
