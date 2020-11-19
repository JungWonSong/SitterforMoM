from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, permissions

from .serializers import *
from .models import *

class FindJobsViewSet(viewsets.ModelViewSet):
    serializer_class = FindJobsSerializer
    permission_classes = [permissions.IsAuthenticated]
    def get_queryset(self):
        return FindJobs.objects.all().order_by("-created")

    def perform_create(self, serializer):
        serializer.save()
