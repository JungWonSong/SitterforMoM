from rest_framework import serializers
from .models import *


class FindSitterSerializer(serializers.ModelSerializer):
    class Meta:
        model = FindSitter
        fields = '__all__'


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = '__all__'