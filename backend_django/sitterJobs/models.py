from django.db import models
from django.conf import settings

# Create your models here.

class FindJobs(models.Model):
    authorId = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.PROTECT, related_name="사용자"
    )
    title = models.CharField(max_length=255)
    numbers = models.IntegerField()
    contents = models.TextField()
    created = models.DateTimeField(auto_now=False, auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.title


