from knox import views as knox_views
from .views import *
from django.conf.urls import url
from django.urls import path, include

user_list = UserList.as_view({"get": "list", "post": "create"})

user_detail = UserList.as_view(
    {"get": "retrieve", "patch": "partial_update", "delete": "destroy"}
)

profile_list = ProfileViewSet.as_view({"get": "list", "post": "create"})

profile_detail = ProfileViewSet.as_view(
    {"get": "retrieve", "patch": "partial_update", "delete": "destroy"}
)


urlpatterns = [

    path('join/', UserCreate.as_view()),
    path('userlist/', user_list, name="user_list"),
    url("^userdetail/(?P<pk>[0-9]+)/$", user_detail, name="user_detail"),
    url("^profile/$", profile_list, name="profile-list"),
    url("^profile/(?P<pk>[0-9]+)/$", profile_detail, name="profile-detail"),
    url(r'login/', LoginView.as_view(), name='knox_login'),
    url(r'logout/', knox_views.LogoutView.as_view(), name='knox_logout'),
    url(r'logoutall/', knox_views.LogoutAllView.as_view(), name='knox_logoutall'),
]