from rest_framework import serializers
from .models import *


class FindJobsSerializer(serializers.ModelSerializer):
    class Meta:
        model = FindJobs
        fields = '__all__'