from django.shortcuts import render

# Create your views here.
# 뷰 - api 통신의 엔드포인트

from rest_framework import generics

from .serializers import UserSerializer
from .models import User


class UserList(generics.ListAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()  # 데이터를 필터링하기 전 단계


class UserCreate(generics.CreateAPIView):
    serializer_class = UserSerializer


# 뷰 -> 사용자가 뷰를 사용한다. (페이지에 접속한다. 접근한다. 주소창에 주소를 입력하고 엔터키를 누른다.)
# 뷰에 접근할 수 있는 url
# php, asp, jsp 파일명과 경로명이 주소
# src/accounts/list.php
# www.myservice.com/src/accounts/list.php <- path 주소
# url, uri