from django.db import models

# Create your models here.
# 데이터베이스에 어떤 정보를 어떤 형식으로 저장할것이냐?
# 모델이 수정되면 데이터베이스도 수정되어야 한다.

# 새로운 기능을 만든다!
# 1. 앱을 만든다.
# 2. settings.py에 앱 추가
# 3. 모델 작성하기
# 4. 디비에 적용하기(migrate)
# 5. 관리자 페이지에 등록하기
# 6. 시리얼라이저 작성
# 7. 뷰 작성
# 8. url 맵핑

# models.Model : ORM 기능을 포함하고 있는 부모 클래스
# database driver
# ORM
# ODM

# id 필드가 기본 값
class Category(models.Model):
    # 필드들 (데이터베이스의 컬럼) 타입과 제약 조건
    name = models.CharField(max_length=100)
    slug = models.SlugField(
        allow_unicode=True, max_length=100, unique=True, db_index=True
    )
    image = models.ImageField(upload_to="categories/%Y/%m/%d", blank=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


# categoryObject.products.all()
# 주문 정보 : 주문 번호, 회원 번호, 주문 제품, 갯수 - ForeignKey(외래키)
# 회원 정보 : 회원 번호, 이름, 아이디, 비밀번호 - Primary Key(주키)
# join - 두개 이상의 테이블들을 키값을 가지고 연결해서 불러오는 작업


class Product(models.Model):
    name = models.CharField(max_length=150)
    slug = models.SlugField(
        allow_unicode=True, max_length=150, unique=True, db_index=True
    )
    # category_set
    category = models.ForeignKey(
        Category, on_delete=models.PROTECT, related_name="products"
    )

    image = models.ImageField(upload_to="products/%Y/%m/%d", blank=True)
    contents = models.TextField()
    price = models.IntegerField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)


# python manage.py makemigrations 데이터베이스 반영할 내용을 찾아서 목록을 만든다.
# python manage.py sqlmigrate shop 0001 어떤 쿼리가 실행될지 확인
# python manage.py migrate 반영할 내용을 실제로 반영