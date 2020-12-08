from knox import views as knox_views
from .views import *
from django.conf.urls import url
from django.urls import path, include

user_list = UserList.as_view({"get": "list", "post": "create"})

user_detail = UserList.as_view(
    {"get": "retrieve", "patch": "partial_update", "delete": "destroy"}
)


urlpatterns = [
     # 소셜 로그인
    path('kakao/', kakao_login, name='kakao_login'),
    path('kakao/callback/', kakao_callback, name='kakao_callback'),
    path('allauth/', include('allauth.urls')),
    path('join/', UserCreate.as_view()),
    path('userlist/', user_list, name="user_list"),
    url("^userdetail/(?P<pk>[0-9]+)/$", user_detail, name="user_detail"),
    url(r'login/', LoginView.as_view(), name='knox_login'),
    url(r'logout/', knox_views.LogoutView.as_view(), name='knox_logout'),
    url(r'logoutall/', knox_views.LogoutAllView.as_view(), name='knox_logoutall'),
]