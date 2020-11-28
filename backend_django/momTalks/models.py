from django.db import models
from django.conf import settings

# Create your models here.
class Worry(models.Model):
    authorId = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.PROTECT)
    title = models.CharField(max_length=255)
    contents = models.TextField()
    created = models.DateTimeField(auto_now=False, auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.authorId


class Comment(models.Model):
    talk_Id = models.ForeignKey(Worry, on_delete=models.PROTECT)
    from_userId = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.PROTECT)
    comments = models.TextField()
    created = models.DateTimeField(auto_now=False, auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.writer
