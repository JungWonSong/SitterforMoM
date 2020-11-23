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
        return Review.objects.all().order_by("-created")

    def perform_create(self, serializer):
        serializer.save()

class MessageViewSet(viewsets.ModelViewSet):
    serializer_class = MessageSerializer
    permission_classes = [permissions.IsAuthenticated]
    def get_queryset(self):
        return Message.objects.all().order_by("-jobid_id")

    def perform_create(self, serializer):
        serializer.save()
