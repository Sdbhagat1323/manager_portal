from employee.models import Employee
from rest_framework import viewsets, permissions
from .serializers import ManagerSerializer


# Employee VIewsets
# views allows us to create full CRUD API,
# Without having to sepecifiy explicit method for functionality.

class ManagerViewset(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    # perssion allow you to just see your own deatails.
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ManagerSerializer

