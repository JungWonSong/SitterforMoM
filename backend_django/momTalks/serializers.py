from rest_framework import serializers
from .models import *

class WorrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Worry
        fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'