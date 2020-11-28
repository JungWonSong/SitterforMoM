from django.conf.urls import url
from .views import WorryViewSet, CommentViewSet

worry_list = WorryViewSet.as_view({"get": "list", "post": "create"})

worry_detail = WorryViewSet.as_view(
    {"get": "retrieve", "patch": "partial_update", "delete": "destroy"}
)

comment_list = CommentViewSet.as_view({"get": "list", "post": "create"})

comment_detail = CommentViewSet.as_view(
    {"get": "retrieve", "patch": "partial_update", "delete": "destroy"}
)


urlpatterns = [
    url("^worry/$", worry_list, name="worry-list"),
    url("^worry/(?P<pk>[0-9]+)/$", worry_detail, name="worry-detail"),
    url("^comment/$", comment_list, name="comment-list"),
    url("^comment/(?P<pk>[0-9]+)/$", comment_detail, name="comment-detail"),
]