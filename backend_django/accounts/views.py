from django.shortcuts import render

# Create your views here.

from django.contrib.auth import login

from rest_framework import permissions
from rest_framework.authtoken.serializers import AuthTokenSerializer
from .serializers import UserSerializer
from knox.views import LoginView as KnoxLoginView
import sys

#https://james1345.github.io/django-rest-knox/auth/
class LoginView(KnoxLoginView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        return super(LoginView, self).post(request, format=None)

    def get_post_response_data(self, request, token, instance):
        userSerializer = UserSerializer

        data = {
            'expiry': self.format_expiry_datetime(instance.expiry),
            'token': token
           # 'id' : self.response
        }
        if userSerializer is not None:
            data["user"] = userSerializer(
                request.user,
                context=self.get_context()
            ).data
        return data



from .serializers import UserSerializer, RegisterSerializer, ProfileSerializer
from .models import User, Profile
from rest_framework import viewsets, generics
import sys 

class UserList(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]
    queryset = User.objects.all()  # 데이터를 필터링하기 전 단계

class UserCreate(generics.CreateAPIView):
    serializer_class = RegisterSerializer
    permission_classes = [permissions.AllowAny]

class ProfileViewSet(viewsets.ModelViewSet):
    serializer_class = ProfileSerializer
    permission_classes = [permissions.AllowAny]
    def get_queryset(self):
        return Profile.objects.all().order_by("-created")

    def perform_create(self, serializer):
        serializer.save()