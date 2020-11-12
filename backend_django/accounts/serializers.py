from rest_framework import serializers

from .models import User

# 해당 모델을 어떻게 다룰것이냐?
class UserSerializer(serializers.ModelSerializer):
    # 장고에서 사용하는 데이터를 다루를 클래스 Meta
    class Meta:
        model = User
        fields = "__all__"