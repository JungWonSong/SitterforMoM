from django.conf.urls import url
from .views import FindJobsViewSet

jobs_list = FindJobsViewSet.as_view({"get": "list", "post": "create"})

jobs_detail = FindJobsViewSet.as_view(
    {"get": "retrieve", "patch": "partial_update", "delete": "destroy"}
)


urlpatterns = [
    url("^sitterJobs/$", jobs_list, name="jobs-list"),
    url("^sitterJobs/(?P<pk>[0-9]+)/$", jobs_detail, name="jobs-detail"),
]