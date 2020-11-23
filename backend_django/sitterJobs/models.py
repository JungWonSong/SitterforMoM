from django.db import models
from django.conf import settings

# Create your models here.

class FindSitter(models.Model):
    PAY_TYPE = (
        ('M', 'Monthly'),
        ('W', 'Weekly'),
        ('D', 'Dailly'),
    )
    authorId = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.PROTECT)
    title = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    payment_type = models.CharField(max_length=1, choices=PAY_TYPE)
    models.IntegerField
    kids_ages = models.CharField(max_length=255)
    pay_per_hour = models.IntegerField()
    work_time_per_day = models.IntegerField()
    work_weeks = models.CharField(max_length=255)
    work_start_time = models.IntegerField()
    work_end_time = models.IntegerField()
    work_start_date = models.DateField()
    work_type = models.CharField(max_length=255)
    cctv_yn = models.IntegerField()
    required_security_level = models.IntegerField()
    required_conditions = models.TextField(blank=True)
    contents = models.TextField()
    created = models.DateTimeField(auto_now=False, auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.title


class Review(models.Model):
    userId = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.PROTECT)
    jobid = models.ForeignKey(FindSitter, on_delete=models.PROTECT)
    liked_level = models.IntegerField()
    comments = models.TextField()
    created = models.DateTimeField(auto_now=False, auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.liked_level

class Message(models.Model):
    userId = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.PROTECT)
    jobid = models.ForeignKey(FindSitter, on_delete=models.PROTECT)
    title = models.CharField(max_length=255)
    comments = models.TextField()
    created = models.DateTimeField(auto_now=False, auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.title