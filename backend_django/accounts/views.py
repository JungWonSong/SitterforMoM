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



from .serializers import UserSerializer, RegisterSerializer
from .models import User
from rest_framework import viewsets, generics
import sys 

class UserList(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]
    queryset = User.objects.all()  # 데이터를 필터링하기 전 단계

class UserCreate(generics.CreateAPIView):
    serializer_class = RegisterSerializer
    permission_classes = [permissions.AllowAny]

from django.shortcuts import redirect 
import urllib 

# code 요청
def kakao_login(request):
    app_rest_api_key = 'bbe0d141f020688468406756219cebff'
    redirect_uri = "http://127.0.0.1:8000"
    return redirect(
        f"https://kauth.kakao.com/oauth/authorize?client_id={app_rest_api_key}&redirect_uri={redirect_uri}&response_type=code"
    )
    
    
# access token 요청
def kakao_callback(request):                                                                  
    params = urllib.parse.urlencode(request.GET)                                      
    return redirect(f'http://127.0.0.1:8000?{params}') 