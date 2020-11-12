# url 라우팅 테이블

# ~뷰와 ~주소를 연결해주겠다.
from django.urls import path
from rest_framework_jwt.views import (
    obtain_jwt_token,
    refresh_jwt_token,
    verify_jwt_token,
)

from .views import *

urlpatterns = [
    path("", UserList.as_view(), name="user_list"),
    path("join/", UserCreate.as_view()),
    # 로그인, 리프래시, 검증
    path("token/", obtain_jwt_token),
    path("token/refresh/", refresh_jwt_token),
    path("token/verify/", verify_jwt_token),
]

# www.naver.com
# www.naver.com/list/
# www.naver.com/accounts/
# www.naver.com/accounts/list/
# www.naver.com/accounts/join/
# 장고 : 함수(독특한), 클래스형(정형화된) -> CRUDL -> 방명록 쓰기 밑에 리스트
# 장바구니에 담기, 주문(함수) -> 개발자의 편의, 위험하다
# 제품 리스트, 제품 상세페이지 (클래스형)
# 1차 파일 (root urls) config/urls.
# 앱 안에 있는 urls 2차 파일
# 소셜로그인 -> 3rd-party
# 대학병원
# 1. information -> 접수 root urls.py
# 2. 외과쪽(원무가) -> 2차 urls.py
