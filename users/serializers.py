from allauth.account.adapter import get_adapter
from rest_auth.registration.serializers import RegisterSerializer
from rest_framework import serializers
from rest_framework.authtoken.models import Token

from .models import User, Manager


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'username', 'password', 'is_employee', 'is_manager')


class ManagerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Manager
        fields = '__all__'



class CustomRegisterSerializer(RegisterSerializer):
    is_manager = serializers.BooleanField()
    is_employee = serializers.BooleanField()

    class Meta:
        model = User
        fields = ('email', 'username', 'password', 'is_employee', 'is_manager')

    def get_cleaned_data(self):
        return {
            'username': self.validated_data.get('username', ''),
            'password1': self.validated_data.get('password1', ''),
            'password2': self.validated_data.get('password2', ''),
            'email': self.validated_data.get('email', ''),
            'is_manager': self.validated_data.get('is_manager', ''),
            'is_employee': self.validated_data.get('is_employee', '')
        }

    def save(self, request):
        adapter = get_adapter()
        user = adapter.new_user(request)
        self.cleaned_data = self.get_cleaned_data()
        user.is_manager = self.cleaned_data.get('is_manager')
        user.is_employee = self.cleaned_data.get('is_employee')
        user.save()
        adapter.save_user(request, user, self)
        return user


class TokenSerializer(serializers.ModelSerializer):
    user_type = serializers.SerializerMethodField()

    class Meta:
        model = Token
        fields = ('key', 'user', 'user_type')

    def get_user_type(self, obj):
        serializer_data = UserSerializer(
            obj.user
        ).data
        is_manager = serializer_data.get('is_manager')
        is_employee = serializer_data.get('is_employee')
        return {
            'is_manager': is_manager,
            'is_employee': is_employee
        }
