from django.db import models

# Create your models here.
# 데이터베이스에서 관리하고자 하는 자료들

from django.contrib.auth.models import AbstractUser

# 원래 유저모델말고 내가 만든 User 모델을 기본으로 사용하겠다.
# 설정값을 변경해야한다.
# 모델 = 데이터베이스
# 모델에 변경이 발생했다 -> 데이터베이스에도 변경을 반영해야한다.
# python manage.py makemigrations
# python manage.py migrate
class User(AbstractUser):
    pass


# CRUD : Create, Read, Update, Delete + List
# 회원 : 회원가입, 프로필페이지, 프로필수정, 회원탈퇴

# 모델
# 시리얼라이저 : 모델의 어떤 필드를 어떻게 다룰 것이냐?
# 뷰 : 시리얼라이저를 사용해서 CRUD 중에 뭘할것이냐?