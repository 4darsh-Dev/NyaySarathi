from django.db import models

# Create your models here.

class Contact(models.Model):
    # Automatically increments , primary_key for identifying unique strokes
    sno = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    email = models.CharField(max_length=100)
    phone = models.CharField(max_length=13, null=True, blank=True)
    description = models.TextField()
    timeStamp = models.DateTimeField(auto_now_add=True, blank=True)


    # update object1 with name
    def __str__(self) -> str:
        return "Message from" + self.name + '-' + self.email