from django.apps import AppConfig

# 앱의 정보를 관리
# custom signal을 만들 경우
# signal : hook, 라이프 사이클 함수
# 구매가 일어났다.(주문 레코드가 추가됐다.)
# 1. 제품의 재고량 낮추기
# 2. 다른 사람들의 장바구니에서 해당 제품 빼기, 안내 메시지 보내기


class ShopConfig(AppConfig):
    name = "shop"
