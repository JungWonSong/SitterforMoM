from django.db import models
from django.conf import settings

# Create your models here.
from django.contrib.auth.models import AbstractUser
from django.db.models.signals import post_save  
from django.dispatch import receiver

class User(AbstractUser):
    pass
    

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    nickname = models.CharField(max_length=50)
    image = models.ImageField(upload_to="products/%Y/%m/%d", blank=True)
    gender = models.IntegerField()
    address  = models.CharField(max_length=50)
    birth_date = models.DateField(null=True, blank=True)
    birth_year = models.CharField(max_length=30, blank=True)
    phone_number = models.CharField(max_length=30, blank=False, unique=True)
    created = models.DateTimeField(auto_now=False, auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.address

