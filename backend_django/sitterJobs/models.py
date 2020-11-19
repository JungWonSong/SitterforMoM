from django.db import models

# Create your models here.

class FindJobs(models.Model):
    title = models.CharField(max_length=255)
    contents = models.TextField()
    created = models.DateTimeField(auto_now=False, auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.text


class FindSitter(models.Model):
    title = models.CharField(max_length=255)
    contents = models.TextField()
    created = models.DateTimeField(auto_now=False, auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.text