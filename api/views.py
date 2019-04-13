from django.shortcuts import render

# Create your views here.
import os
# from django.http import HttpResponse
from interview.models import Interview
from rest_framework import viewsets
from .serializers import InterviewSerializer


class InterviewViewSet(viewsets.ModelViewSet):
    serializer_class = InterviewSerializer
    queryset = Interview.objects.all()

