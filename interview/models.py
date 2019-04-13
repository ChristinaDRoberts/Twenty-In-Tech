from django.db import models



class Interview(models.Model):
    picture = models.ImageField(null=True, upload_to='media')
    subjectName = models.CharField(max_length=255, null=True)
    title = models.CharField(max_length=255, null=True)
    body = models.TextField(null=True)
    tagline = models.CharField(max_length=255, null=True)
    writtenBy = models.CharField(max_length=255, default="Christina Roberts")

