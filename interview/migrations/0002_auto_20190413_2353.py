# Generated by Django 2.2 on 2019-04-13 23:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('interview', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='interview',
            name='picture',
            field=models.ImageField(null=True, upload_to='media'),
        ),
    ]
