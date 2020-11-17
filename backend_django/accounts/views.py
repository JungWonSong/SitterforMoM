from django.shortcuts import render

# Create your views here.

from django.contrib.auth import login

from rest_framework import permissions
from rest_framework.authtoken.serializers import AuthTokenSerializer
from knox.views import LoginView as KnoxLoginView

#https://james1345.github.io/django-rest-knox/auth/
class LoginView(KnoxLoginView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        return super(LoginView, self).post(request, format=None)


from .serializers import UserSerializer
from .models import User
from rest_framework import generics

class UserList(generics.ListAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()  # 데이터를 필터링하기 전 단계


class UserCreate(generics.CreateAPIView):
    serializer_class = UserSerializer