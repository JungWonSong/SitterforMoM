from django.shortcuts import render
from rest_framework import viewsets, permissions
from .serializers import *
from .models import *

# Create your views here.
class WorryViewSet(viewsets.ModelViewSet):
    serializer_class = WorrySerializer
    permission_classes = [permissions.IsAuthenticated]
    def get_queryset(self):
        qs = Worry.objects.all().order_by("-created")
        
        authorId = self.request.query_params.get('authorId','')
        
        if authorId :
            qs = qs.filter(authorId=authorId)
        
        return qs

    def perform_create(self, serializer):
        serializer.save()

class CommentViewSet(viewsets.ModelViewSet):
    serializer_class = CommentSerializer
    permission_classes = [permissions.IsAuthenticated]
    def get_queryset(self):
        qs = Comment.objects.all().order_by("-created")
        
        talk_Id = self.request.query_params.get('talk_Id','')
        from_userId = self.request.query_params.get('from_userId','')

        if talk_Id :
            qs = qs.filter(talk_Id=talk_Id)
        if from_userId :
            qs = qs.filter(from_userId=from_userId)
        return qs

    def perform_create(self, serializer):
        serializer.save()
