# Generated by Django 3.1.3 on 2020-11-22 13:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sitterJobs', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='findjobs',
            old_name='author',
            new_name='authorId',
        ),
    ]
