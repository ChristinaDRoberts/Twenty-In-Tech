from rest_framework import serializers

from interview.models import Interview

class InterviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Interview
        fields = '__all__'


class AdminSerializer (serializers.ModelSerializer):
    class Meta:
        model = Interview
        fields = '__all__'

        # depth = 1