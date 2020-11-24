from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, permissions

from .serializers import FindSitterSerializer, ReviewSerializer, MessageSerializer
from .models import *

class FindSitterViewSet(viewsets.ModelViewSet):
    serializer_class = FindSitterSerializer
    permission_classes = [permissions.IsAuthenticated]
    def get_queryset(self):
        return FindSitter.objects.all().order_by("-created")

    def perform_create(self, serializer):
        serializer.save()


class ReviewViewSet(viewsets.ModelViewSet):
    serializer_class = ReviewSerializer
    permission_classes = [permissions.IsAuthenticated]
    def get_queryset(self):
        qs = Review.objects.all().order_by("-created")
        jobid = self.request.query_params.get('jobid','')
        userId = self.request.query_params.get('userId','')
        if jobid :
            qs = qs.filter(jobid=jobid)
        if userId :
            qs = qs.filter(userId=userId)
        return qs

    def perform_create(self, serializer):
        serializer.save()

class MessageViewSet(viewsets.ModelViewSet):
    serializer_class = MessageSerializer
    permission_classes = [permissions.IsAuthenticated]
    def get_queryset(self):
        qs = Message.objects.all().order_by("-created")
        jobid = self.request.query_params.get('jobid','')
        userId = self.request.query_params.get('userId','')
        if jobid :
            qs = qs.filter(jobid=jobid)
        if userId :
            qs = qs.filter(userId=userId)
        return qs

    def perform_create(self, serializer):
        serializer.save()
