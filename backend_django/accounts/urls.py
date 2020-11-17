from knox import views as knox_views
from .views import *
from django.conf.urls import url
from django.urls import path, include

urlpatterns = [
    path('allauth/', include('allauth.urls')),
    path('userlist/', UserList.as_view(), name="user_list"),
    path('join/', UserCreate.as_view()),
    url(r'login/', LoginView.as_view(), name='knox_login'),
    url(r'logout/', knox_views.LogoutView.as_view(), name='knox_logout'),
    url(r'logoutall/', knox_views.LogoutAllView.as_view(), name='knox_logoutall'),
]