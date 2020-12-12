from rest_framework import serializers

from .models import User, Profile

# 해당 모델을 어떻게 다룰것이냐?
class UserSerializer(serializers.ModelSerializer):
    # 장고에서 사용하는 데이터를 다루를 클래스 Meta
    class Meta:
        model = User
        fields = ('id', 'username')


# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwards = {'password': {'write_only': True}}
 
    def create(self, validated_data):
        user = User.objects.create_user(validated_data
        ['username'], validated_data['email'], validated_data['password'])
        user.set_password(validated_data['password'])
        user.save()
        return user


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'