# Generated by Django 3.1.3 on 2020-11-28 06:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('momTalks', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='comment',
            old_name='worryTalk',
            new_name='talk_Id',
        ),
        migrations.RemoveField(
            model_name='comment',
            name='to_userId',
        ),
    ]