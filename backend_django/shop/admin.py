from django.contrib import admin

# Register your models here.
# 만든 모델을 관리자 페이지에 등록, 관리자 페이지 커스터마이징
# 장고 관리자 페이지 : 초기에는 모든 멤버가 사용, 후기에는 개발자만 사용
from .models import *

# 커스텀 필드 보여주기
def category_slug(obj):
    return obj.category.slug


"""
1. cart 앱, order 앱 만들기
2. cart 정보 모델, order 정보 모델(migrate)
3. admin에 추가
"""


@admin.register(Product)
class ProductOptions(admin.ModelAdmin):
    list_display = ["id", "name", "category", category_slug, "created", "updated"]
    prepopulated_fields = {"slug": ["name"]}
    search_fields = ["name", "slug", "category__name"]
    raw_id_fields = ["category"]


@admin.register(Category)
class CategoryOptions(admin.ModelAdmin):
    list_display = ["id", "name", "created", "updated"]
    prepopulated_fields = {"slug": ["name"]}
