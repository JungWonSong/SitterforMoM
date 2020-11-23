from django.conf.urls import url
from .views import FindSitterViewSet, MessageViewSet

jobs_list = FindSitterViewSet.as_view({"get": "list", "post": "create"})

jobs_detail = FindSitterViewSet.as_view(
    {"get": "retrieve", "patch": "partial_update", "delete": "destroy"}
)

message_list = MessageViewSet.as_view({"get": "list", "post": "create"})

message_detail = MessageViewSet.as_view(
    {"get": "retrieve", "patch": "partial_update", "delete": "destroy"}
)


urlpatterns = [
    url("^findSitter/$", jobs_list, name="jobs-list"),
    url("^findSitter/(?P<pk>[0-9]+)/$", jobs_detail, name="jobs-detail"),
    url("^message/$", message_list, name="message-list"),
    url("^message/(?P<pk>[0-9]+)/$", message_detail, name="message-detail"),
]